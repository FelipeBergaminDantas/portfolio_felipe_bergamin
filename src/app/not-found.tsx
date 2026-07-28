import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-slate-100">
      <p className="text-sm uppercase tracking-[0.3em] text-orange-400">404</p>
      <h1 className="mt-4 text-4xl font-semibold">Página não encontrada</h1>
      <p className="mt-4 max-w-md text-base leading-7 text-slate-400">A página que você tentou acessar não existe ou foi removida.</p>
      <Link href="/" className="mt-8 rounded-full bg-orange-500 px-5 py-3 font-medium text-slate-950">Voltar ao início</Link>
    </main>
  );
}
