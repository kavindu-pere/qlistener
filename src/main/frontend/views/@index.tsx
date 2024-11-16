import '../styles/styles.css';
import {HorizontalLayout, VerticalLayout} from "@vaadin/react-components";

export default function QListenerMainView() {
    return (
        <div className="p-l">

            <h1>QListener</h1>
            <p>QListener is a tool to listen to a queue and display the messages in a table.</p>

            <HorizontalLayout
                theme="spacing padding"
                className="height-4xl"
                style={{justifyContent: 'space-evenly'}}
            >
                <VerticalLayout>
                    <h2>Queue</h2>
                    <p>Queue name: <input type="text"/></p>
                    <p>Queue type: <input type="text"/></p>
                    <p>Queue size: <input type="text"/></p>
                </VerticalLayout>
                <VerticalLayout>
                    <h2>Messages</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Message ID</th>
                            <th>Message</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Message 1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Message 2</td>
                        </tr>
                        </tbody>
                    </table>
                </VerticalLayout>
            </HorizontalLayout>
        </div>
    );
}