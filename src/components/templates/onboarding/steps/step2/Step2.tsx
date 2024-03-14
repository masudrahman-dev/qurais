import React from "react";
import CurrencyInput from "react-currency-input-field";




const Step2 = () => {
  return (
    <div>
      <h3 className="text-subtitle pt-6 pb-base">
        Nice! We better get your sorted soon then
      </h3>
      <p className="pb-8">
        The mortgage amount depends on the price of the property you intend to
        buy. mortgages in the UAE generally only cover 80% of the total property
        price
      </p>

      <form>
        <label htmlFor="price">
          <p className="text-label  pb-base">
            What is the price of your property you’re buying?
          </p>
          <CurrencyInput
            className="focus:outline-none border p-base rounded-lg max-w-[460px] w-full"
            id="price"
            name="price"
            placeholder="Eg 2,000,000"
            decimalsLimit={2}
            onValueChange={(value, name, values) =>
              console.log(value, name, values)
            }
          />
        </label>
      </form>
    </div>
  );
};

export default Step2;
