import React, { useState, createContext } from 'react';

interface Author {
  _id: string;
  username: string;
  name: string;
  bio: string;
  pic: string;
}

interface AuthorContextType {
  author: Author;
  setAuthor: React.Dispatch<React.SetStateAction<Author>>;
}

const initialAuthor: Author = {
  _id: '',
  username: '',
  name: '',
  bio: '',
  pic: '',
};

export const AuthorContext = createContext<AuthorContextType>({
  author: initialAuthor,
  setAuthor: () => {}
});
