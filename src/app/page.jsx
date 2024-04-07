"use client";
import { useState } from "react";

// !Components
import UserInput from "../components/UserInput";
import Story from "../components/Story";
import Loading from "../components/Loading";

export default function Home() {
  const [choices, setChoices] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = async (prompt) => {
    setLoading(true);
    try {
      const res = await fetch("/api/turbo-gpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await res.json();
      setChoices(result.choices);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="text-center min-h-screen relative top-0 bg-cover bg-[#000] ">
      {loading ? (
        <Loading />
      ) : choices.length ? (
        choices.map((choice) => (
          <Story key={choice.index} choice={choice} />
        ))
      ) : (
        <UserInput onSubmit={handleSubmitForm} />
      )}
    </main>
  );
}
