import ItemList from './ItemList';
//! This isn't really doing anything
const TaskCard = ({ count }: { count: number; }) => {
	return <ItemList itemType="task" count={count} />;
};

export default TaskCard;
