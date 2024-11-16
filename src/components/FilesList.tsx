export const FilesList = () => {
  const files = [
    { name: "jumia-products-2024-03-14.json", date: "March 14, 2024" },
    { name: "jumia-electronics-2024-03-13.json", date: "March 13, 2024" },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h3 className="text-xl font-semibold mb-4">Generated Files</h3>
      <div className="space-y-2">
        {files.map((file) => (
          <div
            key={file.name}
            className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="font-medium">{file.name}</span>
            <span className="text-sm text-slate-500">{file.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};