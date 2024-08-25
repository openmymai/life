import Container from '@/app/_components/container';
import { EXAMPLE_PATH } from '@/lib/constants';

export function Footer() {
  return (
    <footer className='bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800'>
      <Container>
        <div className='py-10 flex flex-col lg:flex-row items-center'>
          <h3 className='text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
            ปัญญา ศีล สมาธิ
          </h3>
          <div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2'>
            เป็นคำสอนของพระพุทธเจ้า นำไปปฏิบัติอย่างไร?
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
