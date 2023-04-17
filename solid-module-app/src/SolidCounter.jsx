import { createSignal } from "solid-js"

export default () => {
    const [count, setCount] = createSignal(0)

    return (
        <div className="h-auto w-auto p-6 mt-8 rounded-lg bg-green-200 border-green-300">
            <h3>나는 Solid.js</h3>
            <div>클릭 회수: { count() }</div>
            <button className="bg-indigo-800 text-white font-bold py-2 px-4 rounded" onClick={
                () => setCount(count() + 1) }>
                    클릭하기
                </button>
        </div>
    )
}