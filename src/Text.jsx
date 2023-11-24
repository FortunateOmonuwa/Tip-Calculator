export default function Text({ bill, calculate, review1, review2 }) {
  const tip = calculate(bill, review1, review2);
  return (
    <p className="text">
      {bill.trim() === "" || isNaN(bill) || bill === "0"
        ? ""
        : `You pay $${Number(tip) + Number(bill)} ($${bill} + $${Number(
            tip
          )} tip)`}
    </p>
  );
}
