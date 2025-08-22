export const ProsgressTask = () => {
  return (
    <div className="w-full text-center space-y-2">
      <progress
        max="100"
        value={20}
        className="progress progress-success w-full"
      ></progress>
      {/* <p className="text-sm font-medium">2 out of 10 tasks completed</p> */}
      {true && (
        <p className="text-sm text-success font-semibold">
          You've completed all tasks! 🎊
        </p>
      )}
    </div>
  );
};
