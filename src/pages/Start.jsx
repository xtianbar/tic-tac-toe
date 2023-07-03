import { useState, useMemo, FormEvent } from "react";
interface Props {
  handleStart(players: string[]): void;
}
const Start = (props: Props) => {
  const { handleStart } = props;
  const [players, setPlayers] = useState(["", ""]);
  const handleInput = (event: FormEvent<HTMLInputElement>, index: number) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1, event.currentTarget.value);
    setPlayers(newPlayers);
  };
  const canStart = useMemo(
    () => players.every((player) => player && player.length > 0),
    [players]
  );
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canStart) return;
    handleStart(players);
  };
  return (
    <div className="flex flex-col text-center py-10">
      <h1 className="text-[#41403e] text-3xl font-bold uppercase">React Tic-Tac-Toe Game</h1>
      <form className="py-2 font-semibold" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="player1">Player 1</label>
          <input placeholder="Enter 1st Player Name"
            type="text"
            value={players[0]}
            onInput={(e) => handleInput(e, 0)}
          />
        </div>
        <div>
          <label htmlFor="player2">Player 2</label>
          <input placeholder="Enter 2nd Player Name"
            type="text"
            value={players[1]}
            onInput={(e) => handleInput(e, 1)}
          />
        </div>
        <div className="mt-3">
          <button type="submit" disabled={!canStart}>
            Start
          </button>
        </div>
      </form>
    </div>
  );
};
export default Start;
