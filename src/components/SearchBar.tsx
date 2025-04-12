// src/components/SearchBar.tsx
type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
  };
  
  export function SearchBar({ value, onChange }: SearchBarProps) {
    return (
      <div className="w-full">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Tìm kiếm tiêu đề hoặc mô tả..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    );
  }
  