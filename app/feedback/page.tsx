'use client'
import { useState } from "react"

export default function Feedback() {
    const [nama, setNama] = useState("")
    const [feedback, setFeedback] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="min-h-screen bg-white text-black px-4">
            <h1 className="font-bold text-3xl flex justify-center pt-10">Feedback</h1>

            <form onSubmit={handleSubmit} className="flex flex-col pt-10 items-center gap-4">
                <input
                    type="text"
                    placeholder="Nama"
                    className="px-3 py-2 w-full max-w-md rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Tulis feedback di sini"
                    rows={4}
                    className="px-3 py-2 w-full max-w-md rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
                >
                    Submit
                </button>
            </form>

            {submitted && (
                <div className="mt-6 mx-auto w-full max-w-md p-4 border border-gray-300 bg-gray-50 rounded-md shadow-sm">
                    <h2 className="text-lg font-semibold mb-2">Hasil Feedback</h2>
                    <p><strong>Nama:</strong> {nama}</p>
                    <p><strong>Pesan:</strong> {feedback}</p>
                </div>
            )}
        </div>
    )
}
