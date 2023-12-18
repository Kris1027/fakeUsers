import { useState } from 'react';
import Button from '../ui/Button';
import { MdCancel } from 'react-icons/md';
import { MdCheck } from 'react-icons/md';
import useUpdateUser from '../hooks/useUpdateUser';
import Input from '../ui/Input';

export default function EditUser({
  first_name,
  last_name,
  id,
  setShowEdit,
  showEdit,
  image,
}) {
  const [updatedFirstName, setUpdatedFirstName] = useState(first_name);
  const [updatedLastName, setUpdatedLastName] = useState(last_name);
  const [updatedImage, setUpdatedImage] = useState(image);
  const updateUser = useUpdateUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(id, {
      id,
      first_name: updatedFirstName,
      last_name: updatedLastName,
      avatar: updatedImage,
    });

    setShowEdit(!showEdit);
  };

  const handleCancel = () => {
    setShowEdit(!showEdit);
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-2'>
      <Input
        type='text'
        value={updatedFirstName}
        onChange={(e) => setUpdatedFirstName(e.target.value)}
      />
      <Input
        type='text'
        value={updatedLastName}
        onChange={(e) => setUpdatedLastName(e.target.value)}
      />
      <Input
        type='file'
        onChange={(e) =>
          setUpdatedImage(URL.createObjectURL(e.target.files[0]))
        }
      />
      <Button onClick={handleCancel}>
        <MdCancel />
      </Button>
      <Button>
        <MdCheck />
      </Button>
    </form>
  );
}
