import { useState } from "react";
import { Anecdote, AnecdoteCard } from "../anecdotes";
import { anecdotes } from "../anecdotes/data";
import { getMostVotedAnecdoteData } from "../anecdotes/helpers";
import { initialVoteState } from "../anecdotes/state/initialVoteState";
import { Button, ButtonSet, SectionHeader } from "../shared";

export const AnecdoteSection = function () {
  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(initialVoteState);

  const handleRandomAnecdote = () => {
    const anecdotesRange = anecdotes.length;
    const index = Math.floor(Math.random() * anecdotesRange);

    setSelected(index);
  };

  const handleUpdateVotes = () => {
    setVoted((prevVotes) => {
      const nextVotes = [...prevVotes];
      nextVotes[selected] += 1;

      return nextVotes;
    });
  };

  const { mostVotedAnecdote, maxVoteValue } = getMostVotedAnecdoteData({
    votesCollection: voted,
    anecdotesCollection: anecdotes,
  });

  return (
    <section className="section">
      <SectionHeader text="anecdotes" />
      <AnecdoteCard title="Anecdote of the day">
        <Anecdote content={anecdotes[selected]} votes={voted[selected]} />
      </AnecdoteCard>
      <ButtonSet>
        <Button label="Vote" handleUpdate={handleUpdateVotes} level="success" />
        <Button
          label="Next"
          handleUpdate={handleRandomAnecdote}
          level="secondary"
        />
      </ButtonSet>
      <AnecdoteCard title="Anecdote with most votes">
        <Anecdote content={mostVotedAnecdote} votes={maxVoteValue} />
      </AnecdoteCard>
    </section>
  );
};
