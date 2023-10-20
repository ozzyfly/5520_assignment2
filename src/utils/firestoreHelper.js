import { db } from "./firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";

const handleFirestoreError = (error, message) => {
  console.error(message, error);
  throw new Error(message);
};

export const addNewExpense = async (expense) => {
  try {
    await addDoc(collection(db, "expenses"), expense);
  } catch (error) {
    handleFirestoreError(error, "Error adding new expense.");
  }
};

export const updateExpense = async (id, updatedExpense) => {
  try {
    const expenseRef = doc(db, "expenses", id);
    await updateDoc(expenseRef, updatedExpense);
  } catch (error) {
    handleFirestoreError(error, "Error updating the expense.");
  }
};

export const listenToExpensesUpdates = (updateFunction, errorFunction) => {
  const expensesRef = collection(db, "expenses");
  return onSnapshot(
    expensesRef,
    (querySnapshot) => {
      const expenses = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      updateFunction(expenses);
    },
    (error) => {
      errorFunction(error.message);
    }
  );
};

export const deleteExpense = async (id) => {
  try {
    const expenseRef = doc(db, "expenses", id);
    await deleteDoc(expenseRef);
  } catch (error) {
    handleFirestoreError(error, "Error deleting the expense.");
  }
};
