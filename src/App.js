import React, {Component} from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import './App.css';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

let initialItems = [
    {content: '0', id: 'item-1'},
    {content: '0', id: 'item-2'},
    {content: '0', id: 'item-3'},
    {content: '0', id: 'item-4'},
    {content: '0', id: 'item-5'},
    {content: '1', id: 'item-6'},
    {content: '1', id: 'item-7'},
    {content: '1', id: 'item-8'},
    {content: '1', id: 'item-9'},
    {content: '1', id: 'item-10'},
    {content: '1', id: 'item-11'},
    {content: '2', id: 'item-12'},
    {content: '2', id: 'item-13'},
    {content: '2', id: 'item-14'},
    {content: '2', id: 'item-15'},
    {content: '2', id: 'item-16'},
    {content: '2', id: 'item-17'},
    {content: '3', id: 'item-18'},
    {content: '3', id: 'item-19'},
    {content: '3', id: 'item-20'},
    {content: '3', id: 'item-21'},
    {content: '3', id: 'item-22'},
    {content: '4', id: 'item-23'},
    {content: '4', id: 'item-24'},
    {content: '4', id: 'item-25'},
    {content: '4', id: 'item-26'},
    {content: '4', id: 'item-27'},
    {content: '5', id: 'item-28'},
    {content: '5', id: 'item-29'},
    {content: '5', id: 'item-30'},
    {content: '5', id: 'item-31'},
    {content: '6', id: 'item-32'},
    {content: '6', id: 'item-33'},
    {content: '6', id: 'item-34'},
    {content: '6', id: 'item-35'},
    {content: '7', id: 'item-36'},
    {content: '7', id: 'item-37'},
    {content: '7', id: 'item-38'},
    {content: '7', id: 'item-39'},
    {content: '8', id: 'item-40'},
    {content: '8', id: 'item-41'},
    {content: '8', id: 'item-42'},
    {content: '8', id: 'item-43'},
    {content: '9', id: 'item-44'},
    {content: '9', id: 'item-45'},
    {content: '9', id: 'item-46'},
    {content: '9', id: 'item-47'},
    {content: '10', id: 'item-48'},
    {content: '10', id: 'item-49'},
    {content: '11', id: 'item-50'},
    {content: '12', id: 'item-51'},
    {content: '12', id: 'item-52'},
    {content: '13', id: 'item-53'},
    {content: '14', id: 'item-54'},
    {content: '15', id: 'item-55'},
    {content: '16', id: 'item-56'},
    {content: '17', id: 'item-57'},
    {content: '18', id: 'item-58'},
    {content: '19', id: 'item-59'},
    {content: '20', id: 'item-60'},
    {content: '+', id: 'item-61'},
    {content: '+', id: 'item-62'},
    {content: '+', id: 'item-63'},
    {content: '+', id: 'item-64'},
    {content: '-', id: 'item-65'},
    {content: '-', id: 'item-66'},
    {content: '-', id: 'item-67'},
    {content: '-', id: 'item-68'},
    {content: '+/-', id: 'item-69'},
    {content: '+/-', id: 'item-70'},
    {content: '+/-', id: 'item-71'},
    {content: '+/-', id: 'item-72'},
    {content: 'x', id: 'item-73'},
    {content: 'x', id: 'item-74'},
    {content: 'x', id: 'item-75'},
    {content: 'x', id: 'item-76'},
    {content: '÷', id: 'item-77'},
    {content: '÷', id: 'item-78'},
    {content: '÷', id: 'item-79'},
    {content: '÷', id: 'item-80'},
    {content: 'x/÷', id: 'item-81'},
    {content: 'x/÷', id: 'item-82'},
    {content: 'x/÷', id: 'item-83'},
    {content: 'x/÷', id: 'item-84'},
    {content: '?', id: 'item-85'},
    {content: '?', id: 'item-86'},
    {content: '?', id: 'item-87'},
    {content: '?', id: 'item-88'},
    {content: '=', id: 'item-89'},
    {content: '=', id: 'item-90'},
    {content: '=', id: 'item-91'},
    {content: '=', id: 'item-92'},
    {content: '=', id: 'item-93'},
    {content: '=', id: 'item-94'},
    {content: '=', id: 'item-95'},
    {content: '=', id: 'item-96'},
    {content: '=', id: 'item-97'},
    {content: '=', id: 'item-98'},
    {content: '=', id: 'item-99'},
    {content: '=', id: 'item-100'},
]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// fake data generator
const getItems = (count = 0) => {
    shuffle(initialItems)
    const removed = initialItems.splice(0, count)
    console.log(Object.keys({removed}).pop(), removed)
    return Array.from(removed)
}

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the p1 look a bit nicer
    userSelect: "none",
    padding: grid / 4,
    margin: `${grid / 2}px ${grid / 2}px 0 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "#424242",
    color: "white",
    minWidth: 64,
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: 96,
    minHeight: 64,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    display: "flex",
    padding: grid,
    flexWrap: "wrap",
    minHeight: 64,
});

const getButtonStyle = () => ({
    padding: grid * 2,
    margin: grid,
    marginLeft: 0,
    minWidth: 128,
    display: "flex"
})

class App extends Component {
    state = {
        p1: [],
        p2: [],
        change: [],
        submit: [],
        bag: [],
        trash: [],
        p1Turn: false,
        p2Turn: false,
    };

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        droppableP1: 'p1',
        droppableP2: 'p2',
        droppableChange: 'change',
        droppableSubmit: 'submit',
    };

    componentDidMount() {
        this.setState(
            {
                p1: getItems(8),
                p2: getItems(8),
                submit: [],
                bag: getItems(84),
                p1Turn: false,
                p2Turn: false,
            }
        )
    }


    getList = id => this.state[this.id2List[id]];

    onSubmitChange = (items, destination) => {
        const numberOfChange = items.length

        const bagItemsClone = Array.from(this.state.bag);
        shuffle(bagItemsClone)

        const newItemFromBag = bagItemsClone.splice(0, numberOfChange)
        const destinationState = this.state[this.id2List[destination.droppableId]]

        this.setState({
            [this.id2List[destination.droppableId]]: [...destinationState, ...newItemFromBag],
            bag: [...bagItemsClone, ...items],
            change: []
        });
    }

    onSubmitConfirm = (items, source) => {
        const numberOfChange = items.length

        const bagItemsClone = Array.from(this.state.bag);
        shuffle(bagItemsClone)

        const newItemFromBag = bagItemsClone.splice(0, numberOfChange)
        const sourceState = this.state[this.id2List[source.droppableId]]

        this.setState({
            [this.id2List[source.droppableId]]: [...sourceState, ...newItemFromBag],
            bag: [...bagItemsClone],
            trash: [...this.state.trash, items],
            submit: []
        });
    }

    onDragEnd = result => {
        const {source, destination} = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const resultList = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            this.setState({[this.id2List[source.droppableId]]: resultList});
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                [this.id2List[source.droppableId]]: result[source.droppableId],
                [this.id2List[destination.droppableId]]: result[destination.droppableId],
            });
        }
    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <div className="App" id="App">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <ExpansionPanel expanded={this.state.p1Turn}
                                    onChange={() => this.setState({p1Turn: !this.state.p1Turn})}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon/>}
                        >
                            <h2>ผู้เล่น 1</h2>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                            <Droppable droppableId="droppableP1" direction="horizontal">
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        style={
                                            getListStyle(snapshot.isDraggingOver)
                                        }>
                                        {this.state.p1.map((item, index) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index}>
                                                {(provided, snapshot) => (
                                                    <Card
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={getItemStyle(
                                                            snapshot.isDragging,
                                                            provided.draggableProps.style
                                                        )}>
                                                        <Typography variant="h3" component="h4">
                                                            {item.content}
                                                        </Typography>
                                                    </Card>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                            <div style={{display: "flex"}}>

                                <Button
                                    style={getButtonStyle()}
                                    disabled={this.state.change.length === 0 || this.state.submit.length > 0 || this.state.p1.length === 8 || this.state.bag.length === 0}
                                    variant="contained" color="primary"
                                    onClick={() => {
                                        this.onSubmitChange(this.state.change, {droppableId: "droppableP1"})
                                        this.setState({p1Turn: false, p2Turn: true})
                                    }}>

                                    <Typography variant="h5" component="h6">
                                        เปลี่ยน </Typography>
                                </Button>
                                <Button
                                    style={getButtonStyle()}
                                    disabled={this.state.submit.length === 0 || this.state.change.length > 0 || (this.state.p1.length === 8 && this.state.bag.length !== 0)}
                                    variant="contained" color="secondary"
                                    onClick={() => {
                                        this.onSubmitConfirm(this.state.submit, {droppableId: "droppableP1"})
                                        this.setState({p1Turn: false, p2Turn: true})
                                    }}>
                                    <Typography variant="h5" component="h6">
                                        ลง </Typography> </Button>
                            </div>
                        </ExpansionPanelDetails>

                    </ExpansionPanel>

                    <h2>ใส่เบี้ยที่จะเปลี่ยนที่นี่</h2>
                    <Droppable droppableId="droppableChange" direction="horizontal">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={
                                    getListStyle(snapshot.isDraggingOver)
                                }>
                                {this.state.change.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <Card
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                <Typography variant="h3" component="h4">
                                                    {item.content}
                                                </Typography>
                                            </Card>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <h2>ใส่เบี้ยที่จะลงที่นี่</h2>
                    <Droppable droppableId="droppableSubmit" direction="horizontal">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={
                                    getListStyle(snapshot.isDraggingOver)
                                }>
                                {this.state.submit.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <Card
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                <Typography variant="h3" component="h4">
                                                    {item.content}
                                                </Typography>
                                            </Card>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <ExpansionPanel expanded={this.state.p2Turn}
                                    onChange={() => this.setState({p2Turn: !this.state.p2Turn})}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon/>}>
                            <h2>ผู้เล่น 2</h2>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                            <Droppable droppableId="droppableP2" direction="horizontal">
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        style={
                                            getListStyle(snapshot.isDraggingOver)
                                        }>
                                        {this.state.p2.map((item, index) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index}>
                                                {(provided, snapshot) => (
                                                    <Card
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={getItemStyle(
                                                            snapshot.isDragging,
                                                            provided.draggableProps.style
                                                        )}>
                                                        <Typography variant="h3" component="h4">
                                                            {item.content}
                                                        </Typography>
                                                    </Card>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                            <div style={{display: "flex"}}>
                                <Button
                                    style={getButtonStyle()}
                                    disabled={this.state.change.length === 0 || this.state.submit.length > 0 || this.state.p2.length === 8 || this.state.bag.length === 0}
                                    variant="contained" color="primary"
                                    onClick={() => {
                                        this.onSubmitChange(this.state.change, {droppableId: "droppableP2"})
                                        this.setState({p1Turn: true, p2Turn: false})
                                    }}>
                                    <Typography variant="h5" component="h6">
                                        เปลี่ยน </Typography>
                                </Button>
                                <Button
                                    style={getButtonStyle()}
                                    disabled={this.state.submit.length === 0 || this.state.change.length > 0 || (this.state.p2.length === 8 && this.state.bag.length !== 0)}
                                    variant="contained" color="secondary"
                                    onClick={() => {
                                        this.onSubmitConfirm(this.state.submit, {droppableId: "droppableP2"})
                                        this.setState({p1Turn: true, p2Turn: false})
                                    }}>
                                    <Typography variant="h5" component="h6">
                                        ลง </Typography>
                                </Button></div>
                        </ExpansionPanelDetails>

                    </ExpansionPanel>

                </DragDropContext>
                <div id="bag">
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon/>}
                        >
                            <h2>เบี้ยในถุง</h2>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            {this.state.bag.map((item, index) => (<span id={index}>{item.content}</span>))}
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>
        );
    }
}

export default App;
