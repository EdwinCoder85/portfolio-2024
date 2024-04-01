import { useState } from "react";

interface Skill {
  id: number;
  name: string;
}

interface DragEvent {
  preventDefault: () => void;
  dataTransfer: {
    setData: (type: string, value: string) => void;
    getData: (type: string) => string;
  };
}

const useDragDrop = <T extends Skill[]>(initialSkills: T) => {
  const [skills, setSkills] = useState<T>(initialSkills);

  const handleDragStart = (index: number) => (event: DragEvent) => {
    event.dataTransfer.setData("index", index.toString());
  };

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (destinationIndex: number) => (event: DragEvent) => {
    const sourceIndex = parseInt(event.dataTransfer.getData("index"), 10);
    const newSkills = [...skills];
    const [draggedSkill] = newSkills.splice(sourceIndex, 1);
    newSkills.splice(destinationIndex, 0, draggedSkill);
    setSkills(newSkills as T);
  };

  return { skills, handleDragStart, handleDragOver, handleDrop };
};

export default useDragDrop;

