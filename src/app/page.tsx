"use client";

import FormInput from "@/components/formInput";
import FormSelect from "@/components/formSelect";
import { FormEvent, useState } from "react";

const typeOptions = ["Speech(TV)", "Book", "Movie", "Cartoon", "Serial"];

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Ukrainian",
  "Chinese",
];

export default function Home() {
  const [request, setRequest] = useState({
    sourceType: typeOptions.at(0) || "",
    sourceTitle: "",
    author: "",
    language: languages.at(0) || "",
  });

  function formSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(request);
  }
  return (
    <>
      <h1 className="text-4xl font-bold">Find Your Quote</h1>
      <form onSubmit={formSubmit}>
        <div className="mt-8 mb-4 flex flex-wrap items-center gap-8 text-lg">
          <FormSelect
            title="Source Type:"
            value={request.sourceType}
            typeOptions={typeOptions}
            setOption={(option: string) =>
              setRequest({ ...request, sourceType: option })
            }
          />
          <FormSelect
            title="Language:"
            value={request.language}
            typeOptions={languages}
            setOption={(option: string) =>
              setRequest({ ...request, language: option })
            }
          />

          <FormInput
            type="text"
            value={request.sourceTitle}
            placeholder="Enter the title of the source..."
            setInput={(value: string) => {
              setRequest({ ...request, sourceTitle: value });
            }}
          />
          <FormInput
            type="text"
            placeholder="Enter the author's name..."
            value={request.author}
            setInput={(value: string) => {
              setRequest({ ...request, author: value });
            }}
          />
        </div>
        <button className="px-4 py-2 bg-lime-800 text-white text-lg rounded-lg">
          Submit
        </button>
      </form>
    </>
  );
}
