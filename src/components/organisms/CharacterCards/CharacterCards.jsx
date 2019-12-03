import React, { Component } from "react";
import { Card, Avatar, List } from "antd";

export default class CharacterCards extends Component {
  state = {
    avatar: "",
    name: "",
    birthday: null,
    status: "",
    category: ""
  };
  componentDidMount() {
    console.log("this.propsInCharacterCard", this.props.dataSource);
    this.props.dataSource.getAllCharacters();
  }

  render() {
    const { dataSource } = this.props;

    const data = dataSource.characterCards;

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
              style={{ width: 200, height: 450 }}
              cover={
                <Avatar
                  size={164}
                  icon="user"
                  src={item.avatar}
                  style={{ margin: "auto" }}
                  onClick={this.changeUser}
                />
              }
            >
              <p>name: {item.name}</p>
              <p>nick: {item.nickname}</p>
              <p>birthday: {item.birthday}</p>
              <p>status: {item.status}</p>
              <p>category: {item.category}</p>
            </Card>
          </List.Item>
        )}
      />
    );
  }
}
