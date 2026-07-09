import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white rounded-2xl p-4 shadow-md flex items-center gap-4 ${className}`}
    >
      {/* Amount Section */}
      <div className="flex-1">
        <label
          htmlFor={amountInputId}
          className="block text-sm text-gray-500 mb-2"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          type="number"
          placeholder="Enter Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="w-full bg-transparent text-xl font-semibold outline-none"
        />
      </div>

      {/* Currency Section */}
      <div className="w-36">
        <p className="text-sm text-gray-500 mb-2 text-right">
          Currency Type
        </p>

        <select
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
          className="
            w-full
            bg-gray-100
            rounded-lg
            px-3
            py-2
            cursor-pointer
            outline-none
            border
            border-gray-200
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
          "
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;