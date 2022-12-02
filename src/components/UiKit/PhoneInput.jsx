function PhoneInput({
  id,
  className,
  type,
  onChange,
  placeholder,
  value,
  disabled,
}) {
  const getInputNumbersValue = (input) => input.value.replace(/\D/g, "");
  const onPhonePaste = (e) => {
    const input = e.target;
    const inputNumbersValue = getInputNumbersValue(input);
    const pasted = e.clipboardData || window.clipboardData;

    if (pasted) {
      const pastedText = pasted.getData("Text");

      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };

  const onPhoneInput = (e) => {
    const input = e.target;
    let inputNumbersValue = getInputNumbersValue(input);
    const { selectionStart } = input;
    let formattedInputValue = "";

    if (!inputNumbersValue) input.value = "";

    if (input.value.length !== selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
    }

    // ru number
    if (["7", "8", "9"].includes(inputNumbersValue[0])) {
      const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";

      if (inputNumbersValue[0] === "9")
        inputNumbersValue = `7${inputNumbersValue}`;
      formattedInputValue = `${firstSymbols} `;

      if (inputNumbersValue.length > 1) {
        formattedInputValue += `(${inputNumbersValue.substring(1, 4)}`;
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`;
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
      }
    }

    // not ru number
    if (["1", "2", "3", "4", "5", "6"].includes(inputNumbersValue[0])) {
      formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
    }

    input.value = formattedInputValue;
  };

  const onPhoneKeyDown = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    if (e.keyCode === 8 && inputValue.length === 1) {
      e.target.value = "";
    }
  };

  return (
    <input
      className={className}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      id={id}
      disabled={disabled}
      onPaste={onPhonePaste}
      onInput={onPhoneInput}
      onKeyDown={onPhoneKeyDown}
    />
  );
}

export default PhoneInput;
