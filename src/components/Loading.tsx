import { Ellipsis } from 'lucide-react';
const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Ellipsis className='animate-pulse size-24'/>
    </div>
  );
};

export default Loading;
