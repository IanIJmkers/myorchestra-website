import { Link } from "react-router";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-6">
      <div className="text-center max-w-md">
        <div className="text-8xl font-heading font-bold text-indigo-200 mb-4">
          404
        </div>
        <h1 className="text-2xl font-heading font-bold text-slate-900 mb-4">
          Pagina niet gevonden
        </h1>
        <p className="text-slate-500 mb-8">
          De pagina die u zoekt bestaat niet of is verplaatst.
        </p>
        <Button href="/" variant="primary" size="lg">
          Terug naar Home
        </Button>
      </div>
    </div>
  );
}
