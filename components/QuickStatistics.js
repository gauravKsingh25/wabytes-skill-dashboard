export default function QuickStatistics({ rank, percentile, correctAnswers }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Quick Statistics</h2>
      <div className="flex justify-between">
        <div className="text-center">
          <p className="text-3xl font-bold">{rank}</p>
          <p className="text-gray-600">YOUR RANK</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">{percentile}%</p>
          <p className="text-gray-600">PERCENTILE</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">{correctAnswers}</p>
          <p className="text-gray-600">CORRECT ANSWERS</p>
        </div>
      </div>
    </div>
  );
}
