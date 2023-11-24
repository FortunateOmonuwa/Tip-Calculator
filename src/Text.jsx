export default function Text({ bill }) {
  return (
    <p>
      {bill.trim() === "" || isNaN(bill)
        ? ""
        : `You pay $X ($${bill} + $Y tip)`}
    </p>
  );
}
