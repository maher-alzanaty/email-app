export default function RightPanel({
  type,
  onClose,
}: {
  type: string;
  onClose: () => void;
}) {
  const renderTasks = () => (
    <div className="flex flex-col items-start gap-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center w-full sm:bg-gray-100 p-4 rounded">
        <h3 className="text-lg font-semibold text-gray-800">Tasks</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-black transition"
        >
          ✕
        </button>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gray-200" />

      {/* Task List */}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1 w-full">
          <div className="text-gray-800 font-medium">Task 1</div>
          <div className="text-gray-500 text-sm">Description of task 1</div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="text-gray-800 font-medium">Task 2</div>
          <div className="text-gray-500 text-sm">Description of task 2</div>
        </div>
        {/* Add more tasks dynamically */}
      </div>

      {/* Add Task Button */}
      <button className="flex items-center justify-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded hover:bg-indigo-100 transition">
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        </svg>
        Add Task
      </button>

      {/* Illustration / Image */}
      <div className="flex flex-col items-center mt-6 justify-center w-full">
        <img
          src="/Donetasks.png" 
          alt="Tasks Illustration"
          className="w-48 h-48 object-contain"
        />
      </div>
    </div>
  );

const contactsData = [
  {
    name: "Recipient Name",
    email: "email@domain.com",
    avatar: "/person.png", // replace with your images
  },
  {
    name: "Recipient Name",
    email: "email@domain.com",
     avatar: "/person.png",
  },
];

const renderContacts = () => (
  <div className="flex flex-col items-center gap-4 w-full">
    {/* Header */}
    <div className="flex justify-between items-center w-full sm:bg-gray-100 p-4 rounded">
      <h3 className="text-lg font-semibold text-gray-800">Contacts</h3>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-black transition"
      >
        ✕
      </button>
    </div>
     {/* Divider */}
      <div className="h-px w-full bg-gray-200" />
    {/* Add Contact Button */}
    <button className="flex items-center justify-center w-full px-4 py-2 border rounded text-indigo-700 font-medium hover:bg-indigo-50 transition">
      Add new contact
    </button>

    {/* Divider */}
    {/* <div className="h-px w-full bg-gray-200" /> */}

    {/* Contacts List */}
    <div className="flex flex-col gap-3 w-full overflow-y-auto max-h-[700px]">
      {contactsData.map((contact, index) => (
        <div
          key={index}
          className="flex items-center gap-3 w-full p-2 rounded hover:bg-gray-50 cursor-pointer"
        >
          <img
            src={contact.avatar}
            alt={contact.name}
            className="w-10 h-10 rounded-md object-cover"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-800">{contact.name}</span>
            <span className="text-sm text-gray-500">{contact.email}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

  const renderCalendar = () => (
  <div className="flex flex-col items-start gap-4 w-full">
    {/* Header */}
    <div className="flex justify-between items-center w-full sm:bg-gray-100 p-4 rounded judtify-center">
      <h3 className="text-lg font-semibold text-gray-800">Calendar</h3>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-black transition"
      >
        ✕
      </button>
    </div>
         {/* Divider */}
      <div className="h-px w-full bg-gray-200" />

    {/* Date Selector */}
    <div className="flex justify-between items-center w-full mt-2 mb-4">
      <button className="text-indigo-700 font-medium">Today ▼</button>
    </div>

    {/* Divider */}
    {/* <div className="h-px w-full bg-gray-200 mb-4" /> */}

    {/* Hours List */}
    <div className="flex flex-col gap-2 w-full overflow-y-auto max-h-[700px]">
      {Array.from({ length: 12 }, (_, i) => {
        const hour = i + 7; // starts at 7 AM
        const displayHour = hour > 12 ? hour - 12 : hour;
        const ampm = hour >= 12 ? "PM" : "AM";
        return (
          <div
            key={hour}
            className="flex items-center justify-between w-full border-b border-gray-200 py-2 text-gray-600 text-sm"
          >
            <span className="w-16">{displayHour} {ampm}</span>
            <div className="flex-1 h-px bg-transparent"></div>
          </div>
        );
      })}
    </div>
  </div>
);

  const renderContent = () => {
    switch (type) {
      case "tasks":
        return renderTasks();
   case "calendar":
  return renderCalendar();
      case "notes":
        return <div className="text-gray-500">Your notes will appear here</div>;
    case "contacts":
  return renderContacts();
      default:
        return null;
    }
  };

return (
  <div
    className={`h-screen bg-white shadow-xl p-6
      transform transition-transform duration-300
      ${type ? "translate-x-0" : "translate-x-full"}
      fixed top-0 right-0 z-50
      w-full lg:w-80 border-l lg:border-l border-gray-200`}
  >
    {renderContent()}
  </div>
);
}