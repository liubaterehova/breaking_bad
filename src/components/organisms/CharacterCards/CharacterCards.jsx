import React, { Component } from "react";
import { Card, Avatar, List } from "antd";

export default class CharacterCards extends Component {
  state = {};
  componentDidMount = () => {
    console.log("function?", this.props.getAllCharacters);
  };

  render() {
    console.log(this.props.characterCards);
    const data = [
      {
        title: "Title 1",
        nick: "Mish",
        birthday: "14"
      },
      {
        title: "Title 2",
        nick: "Mish"
      },
      {
        title: "Title 3",
        nick: "Mish"
      },
      {
        title: "Title 4",
        nick: "Mish"
      },
      {
        title: "Title 5",
        nick: "Mish"
      },
      {
        title: "Title 6",
        nick: "Mish"
      }
    ];
    return (
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card
              style={{ width: 200 }}
              cover={
                <Avatar
                  size={164}
                  icon="user"
                  src="#"
                  style={{ margin: "auto" }}
                  onClick={this.changeUser}
                />
              }
            >
              <p>name: {item.title}</p>
              <p>nick: {item.nick}</p>
              <p>birthday: {item.birthday}</p>
              <p>status:</p>
              <p>category:</p>
            </Card>
          </List.Item>
        )}
      />
    );
  }
}
