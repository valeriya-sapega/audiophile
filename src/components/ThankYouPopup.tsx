import { useNavigate } from 'react-router';
import Button from './Button';
import PathConstants from '../routes/pathConstants';
import { useEffect, useRef } from 'react';

interface ThankYouPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThankYouPopup = ({ isOpen, onClose }: ThankYouPopupProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isOpen]);

  const handleClick = () => {
    onClose();
    navigate(PathConstants.HOME);
  };

  return (
    <dialog
      ref={modalRef}
      onCancel={onClose}
      className='p-12 bg-white rounded-lg h-fit'
    >
      <h2 className='uppercase font-bold text-primary text-3xl mb-16'>
        THANK YOU FOR YOUR ORDER
      </h2>
      <Button onClick={handleClick}>Back to home</Button>
    </dialog>
  );
};
export default ThankYouPopup;
