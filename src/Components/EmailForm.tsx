import { useRef, useState } from 'react';

type Props = {}

function EmailForm({ }: Props) {
  const inputEl = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string>('');

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current!.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);

      return;
    }

    if (inputEl.current) {
      inputEl.current.value = '';
    }
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
    <div className="w-full justify-center items-start gap-4 flex">
      <div className="flex-col justify-start items-start flex">
        <form className="h-12 justify-start items-start gap-4 flex" onSubmit={subscribe}>
          <input
            className="w-[360px] pl-4 pr-3.5 py-3 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 border-none flex"
            placeholder="Enter your email"
            id="email-input"
            name="email"
            required
            type="email"
            ref={inputEl}
          />
          <button className="px-5 py-3 bg-violet-500 rounded-lg shadow border border-violet-500 text-white justify-center items-center gap-2 flex">
            Subscribe
          </button>
        </form>

        <div className="self-stretch">
          <span className="text-sm font-normal leading-tight">
            We care about your data in our{' '}
          </span>
          <span className="text-sm font-normal underline leading-tight">
            privacy policy
          </span>
        </div>
      </div>
    </div>
  );
}

export default EmailForm;
