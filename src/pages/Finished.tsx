interface Props {
  name: string | null;
  restart(): void;
}
const Finished = (props: Props) => {
  const { name, restart } = props;
  return (
    <div className="flex flex-col mt-32 text-center">
      <h1 className="text-2xl font-semibold">
        {name && `Player ${name} won the game`}
        {!name && "It's a tie "}
      </h1>
      <button className="mt-3" onClick={restart}>Restart</button>
    </div>
  );
};
export default Finished;
