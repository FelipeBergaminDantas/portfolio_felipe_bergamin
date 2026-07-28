"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-slate-100">
      <p className="text-sm uppercase tracking-[0.3em] text-orange-400">Erro</p>
      <h1 className="mt-4 text-4xl font-semibold">Algo deu errado</h1>
      <p className="mt-4 max-w-md text-base leading-7 text-slate-400">A aplicação não conseguiu carregar esta sessão. Tente novamente.</p>
      <button onClick={() => reset()} className="mt-8 rounded-full bg-orange-500 px-5 py-3 font-medium text-slate-950">
        Tentar novamente
      </button>
    </main>
  );
}
