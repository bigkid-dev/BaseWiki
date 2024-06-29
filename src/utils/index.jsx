import axios from "axios";

export const productionUrl =
  " https://basewiki-backend-7m72leje7q-uc.a.run.app//AskBaseFlow";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};

export function generateUUID() {
  return "xxxxxxxxxxxxxxxx".replace(/[x]/g, function () {
    const r = (Math.random() * 16) | 0;
    return r.toString(16);
  });
}

export const getInfoFromLocalStorage = () => {
  return localStorage.getItem("sessionId") || null;
};

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(
    () => {
      console.log('Text copied to clipboard');
    },
    (err) => {
      console.error('Failed to copy text: ', err);
    }
  );
};