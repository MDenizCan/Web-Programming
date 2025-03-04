import React from 'react';

const Announcements = () => {
  // Placeholder for announcements data or static content
  const announcements = [
    { id: 1, title: 'Important Announcement', content: 'New Faculty Building has finished.' },
    { id: 2, title: 'New Feature Added', content: 'You can now calculate CPGA.' }
  ];

  return (
    <div className="announcements">
      <h2>Announcements</h2>
      {announcements.map(announcement => (
        <div key={announcement.id} className="announcement">
          <h3>{announcement.title}</h3>
          <p>{announcement.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Announcements;