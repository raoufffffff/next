import { forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  Icon: LucideIcon;
}

// 1. We wrap the component in forwardRef to handle the 'ref' prop correctly
export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, Icon, className, ...props }, ref) => {
    return (
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">
          {label}
        </label>
        <div className="relative">
          <Icon className="absolute top-3 right-3 text-gray-400" size={20} />
          <input
            ref={ref} // 2. The ref is attached here, to the actual input
            className={`w-full pr-10 pl-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none ${className || ''}`}
            {...props}
          />
        </div>
      </div>
    );
  }
);

// Helpful display name for debugging
FormInput.displayName = 'FormInput';