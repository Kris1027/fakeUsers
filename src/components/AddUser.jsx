import { useState } from 'react';
import Button from '../ui/Button';
import useAddUser from '../hooks/useAddUser';
import { MdAddReaction } from 'react-icons/md';
import Input from '../ui/Input';

export default function AddUser() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [image, setImage] = useState(null);
  const createUser = useAddUser();

  const handleAddUser = (e) => {
    e.preventDefault();

    if (firstName.trim() === '' || lastName.trim() === '') return;

    createUser({ first_name: firstName, last_name: lastName, avatar: image });
    setFirstName('');
    setLastName('');
    setImage(null);
  };

  const handleAddImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <form className='flex gap-2 py-10' onSubmit={handleAddUser}>
      <Input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type='text'
        placeholder='name'
      />
      <Input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type='text'
        placeholder='last name'
      />
      <Input type='file' onChange={handleAddImage} />
      <Button type='submit'>
        <MdAddReaction />
      </Button>
    </form>
  );
}
