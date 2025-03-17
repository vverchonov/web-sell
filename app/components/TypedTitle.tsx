import { TypeAnimation } from 'react-type-animation';

export default function TypedTitle() {
  return (
    <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight'>
      We Build{' '}
      <TypeAnimation
        sequence={[
          1000,
          'Websites That Sell',
          4000,
          'E-commerce Solutions',
          4000,
          'Custom Web Apps',
          4000,
          'Digital Experiences',
          4000,
        ]}
        wrapper='span'
        speed={40}
        className='text-red-600'
        repeat={Infinity}
      />
    </h1>
  );
} 