import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Person } from '../../types';

export type Props = {
  person: Person | undefined;
};

export const PersonLink: FC<Props> = ({ person }) => {
  if (!person) {
    return <>-</>;
  }

  return (
    <Link
      to={`/people/${person.slug}`}
      className={person.sex === 'f' ? 'has-text-danger' : ''}
    >
      {person.name}
    </Link>
  );
};