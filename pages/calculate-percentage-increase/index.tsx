import { useRef, useState } from 'react';

const CreatePercentageIncrease: React.FC = () => {
  const [result, setResult] = useState<number>(0);

  const startingValueRef = useRef<HTMLInputElement>(null);
  const endValueRef = useRef<HTMLInputElement>(null);

  const calculatePercentage = () => {
    const endValue: number = Number(endValueRef.current!.value);
    const startingValue: number = Number(startingValueRef.current!.value);
    const result: number = ((endValue - startingValue) / startingValue) * 100;
    setResult(result);
  };

  const setInputToZero = (e: any) => {
    let value = e.currentTarget.value;
    if (value.length === 0) {
      e.currentTarget.value = '0';
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="">
        <div className="mb-3 p-5 h-32 border-b bg-gray-100 text-3xl">
          {result.toFixed(2)}%
        </div>
        <div className="px-2 grid grid-cols-1 gap-3 lg:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm">Starting value</label>
            <input
              className="py-3 px-5 bg-gray-100 rounded w-full text-sm focus:outline-none"
              type="number"
              ref={startingValueRef}
              onBlur={setInputToZero}
              defaultValue={0}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm">End value</label>
            <input
              className="py-3 px-5 bg-gray-100 rounded w-full text-sm focus:outline-none"
              type="number"
              ref={endValueRef}
              onBlur={setInputToZero}
              defaultValue={0}
            />
          </div>
          <div className="lg:col-span-2">
            <button
              className="py-2 w-full block bg-indigo-500 text-white"
              onClick={calculatePercentage}
            >
              calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePercentageIncrease;
