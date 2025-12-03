"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useDebouncedCallback } from "@/hooks/use-debounce";

interface HeroSearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function HeroSearchBar({
  placeholder = "Search creators or campaigns…",
  onSearch,
}: HeroSearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const debouncedSearch = useDebouncedCallback((value: string) => {
    if (value.trim() && onSearch) {
      onSearch(value.trim());
    }
  }, 300);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && query.trim() && onSearch) {
        onSearch(query.trim());
      }
    },
    [query, onSearch]
  );

  return (
    <motion.div
      className="w-full max-w-[700px]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.35,
        ease: "easeOut",
      }}
    >
      <div
        className={`relative flex items-center bg-card rounded-xl border transition-all duration-300 ${
          isFocused
            ? "border-primary shadow-lg shadow-primary/10"
            : "border-border"
        }`}
      >
        <Search
          className={`absolute left-4 w-5 h-5 transition-colors duration-300 ${
            isFocused ? "text-primary" : "text-muted"
          }`}
          aria-hidden="true"
        />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          aria-label="Search creators or campaigns"
          className="w-full py-4 pl-12 pr-4 bg-transparent text-foreground placeholder:text-muted outline-none text-base"
        />
      </div>
    </motion.div>
  );
}
