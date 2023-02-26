import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { Wrapper } from "./App.styled";

export const App = () => {
	return (
		<Wrapper>
			<h1>Phonebook</h1>
			<ContactForm />
			<h2>Contacts</h2>
			<Filter />
			<ContactList />
		</Wrapper>
	);
};
