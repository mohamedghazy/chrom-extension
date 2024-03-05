import React from 'react';
import EmptyState from '../../../shared/components/EmptyState';

function TaskList() {
  return (
    <div>
      <EmptyState
        title="No Tasks "
        message="No tasks created yet"
        actionName="create new task"
      />
    </div>
  );
}

export default TaskList;
