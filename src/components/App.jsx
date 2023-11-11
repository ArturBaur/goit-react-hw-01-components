import React from 'react';
import Section from './Section/Section';

import Profile from './Profile/Profile';
import user from '../data/user.json';

import Statistics from './Statistics/Statistics';
import data from '../data/data.json';

import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export default function App() {
  return (
    <div>
      <Section title={"Task-1 'PROFILE'"}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title={"Task-2 'STATISTICS'"}>
        <Statistics title="Upload stats" stats={data} />
      </Section>

      <Section title={"Task-3 'FRIEND LIST'"}>
        <FriendList friends={friends} />
      </Section>

      <Section title={"Task-4 'Transaction history'"}>
        <TransactionHistory transactions={transactions} />
      </Section>
    </div>
  );
}
