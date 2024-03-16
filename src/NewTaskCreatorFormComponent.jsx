import React, { useState } from 'react';
import { Switch, Box, FormControl, FormLabel, Input, Textarea, Select, Button } from '@chakra-ui/react';
import { format } from 'date-fns';

export default function NewTaskCreatorForm() {

  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [toggleReminder, setToggleReminder] = useState(false);
  const [reminderFrequency, setReminderFrequency] = useState('7');
  const today = new Date();

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleToggleReminderChange = () => {
    setToggleReminder(!toggleReminder);
  };

  const handleReminderFrequencyChange = (event) => {
    setReminderFrequency(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Burada formun gönderim işlemlerini yapabilirsiniz
  };

  return (
    <Box maxW="md" m="auto" p="4">
      <form onSubmit={handleSubmit}>

        <FormControl id="taskName" mb="4">
          <FormLabel>Görev Adı: *</FormLabel>
          <Input type="text" value={taskName} onChange={handleTaskNameChange} placeholder='Evi Topla'/>
        </FormControl>

        <FormControl id="description" mb="4">
          <FormLabel>Açıklama: *</FormLabel>
          <Textarea rows={2} value={description} onChange={handleDescriptionChange} resize={"vertical"} placeholder="Salon çok dağınık"/>
        </FormControl>

        <FormControl id="dueDate" mb="4">
          <FormLabel>Bitiş Tarihi:</FormLabel>
          <Input type="date" value={dueDate} onChange={handleDueDateChange} min={format(today, 'yyyy-MM-dd')} />
        </FormControl>
        
        <FormControl display="flex" alignItems="center" mb="4">
          <FormLabel htmlFor="toggleReminder" mb="0">Hatırlatıcı Açılsın Mı?</FormLabel>
          <Switch id="toggleReminder" isChecked={toggleReminder} onChange={handleToggleReminderChange} />
        </FormControl>

        {toggleReminder && (
          <FormControl id="reminderFrequency" mb="4">
            <FormLabel>Beni her</FormLabel>
            <Select value={reminderFrequency} onChange={handleReminderFrequencyChange}>
              {[1, 2, 3, 4, 5, 6, 7].map((value) => (
                <option key={value} value={String(value)}>{value}</option>
              ))}
            </Select>
            <FormLabel>günde 1 kez uyar.</FormLabel>
          </FormControl>
        )}
        <Button type="submit" colorScheme="blue">Oluştur</Button>
        
      </form>
    </Box>
  );
};