import { Button } from "../utils/utils";
import { ListItem } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/contacts/contactsSelectors";
import { getFilter } from "redux/filter/filterSelectors";
import { deleteContact } from "redux/contacts/contactsSlice";

export const ContactList = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);

	const getFilteredContacts = () => {
		const normalizedFilter = filter.toLowerCase();
		return contacts.filter(({ name }) =>
			name.toLowerCase().includes(normalizedFilter)
		);
	};
	const list = getFilteredContacts();

	const onContactDelete = (id) => dispatch(deleteContact(id));
	return (
		<ul>
			{list.map(({ id, name, number }) => (
				<ListItem key={id}>
					{name}: {number}
					<Button
						onClick={() => {
							onContactDelete(id);
						}}
					>
						Delete
					</Button>
				</ListItem>
			))}
		</ul>
	);
};
