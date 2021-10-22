import { useRef, useState } from 'react';

const index: React.FC = () => {
  const [result, setResult] = useState<number>(0);

  const startingValueRef = useRef<HTMLInputElement>(null);
  const endValueRef = useRef<HTMLInputElement>(null);

  const calculatePercentage = () => {
    const endValue: number = Number(endValueRef.current!.value);
    const startingValue: number = Number(startingValueRef.current!.value);
    const result: number = ((endValue - startingValue) / startingValue) * 100;
    setResult(result);
  };

  return (
    <div className="mx-auto py-24 max-w-2xl">
      <div className="">
        <div className="mb-3 p-5 h-24 bg-gray-100 rounded text-3xl">
          {result.toFixed(2)}%
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block">Starting value</label>
            <input
              className="py-2 px-5 bg-gray-100 rounded w-full focus:outline-none"
              type="number"
              ref={startingValueRef}
            />
          </div>
          <div>
            <label className="mb-1 block">End value</label>
            <input
              className="py-2 px-5 bg-gray-100 rounded w-full focus:outline-none"
              type="number"
              ref={endValueRef}
            />
          </div>
          <div className="col-span-2">
            <button
              className="py-2 w-full block bg-indigo-500 text-white"
              onClick={calculatePercentage}
            >
              CALCULATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
