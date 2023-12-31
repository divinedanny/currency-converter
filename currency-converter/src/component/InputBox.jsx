/* eslint-disable react/prop-types */
import {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    curencyDisabled = false,
    className = "",
}) {
    const id = useId();
  return (
    <div>
      <div className={` bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1-2">
            <label htmlFor={id} className="text-black/40 mb-2 inline-block">{label}</label>
            <input id={id} type="number" name=""
            placeholder='amount' 
            disabled={amountDisabled} 
            value={amount} 
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
            className="outline-none w-full bg-transparent py-1.5" />
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select value={selectedCurrency} 
            className="rounded-lg px-1 py-1 bg-gray-100 
            cursor-pointer outline-none"
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} 
            disabled={curencyDisabled} 
            >
                {currencyOptions.map((currency) => (
                    <option value={currency} key={currency}>{currency}</option>
                ))}
            </select>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InputBox
