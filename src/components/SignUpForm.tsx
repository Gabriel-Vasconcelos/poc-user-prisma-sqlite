"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    try {
      const res = await fetch('/api/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, cpf, email, password }),
      });

      if (res.ok) {
        setMessage("Usuário Cadastrado com sucesso");
        setTimeout(() => {
          setMessage(null);
        }, 1000);

        setName("");
        setCpf("");
        setEmail("");
        setPassword("");
      } else {
        const data = await res.json();
        setError(data.message)
        setTimeout(() => {
          setError(null);
        }, 1000);
      }
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <div>
        <Label htmlFor="name" className="">Nome</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="cpf" className="">CPF</Label>
        <Input
          id="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="email" className="">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="password" className="">Senha</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && <div className="text-red-500 text-sm">{error}</div>}
      {message && <div className="text-green-500 text-sm">{message}</div>}

      <Button
        type="submit"
        className="w-full"
      >
        Cadastrar
      </Button>
    </form>
  )
}

export default SignUpForm;