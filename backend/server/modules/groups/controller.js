import Group from './model';

export const createGroup = async (req, res) => {
  const { name, description, category } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ error: true, message: 'Name must be provided' });
  } else if (typeof name !== 'string') {
    return res
      .status(400)
      .json({ error: true, message: 'Name must be a string!' });
  } else if (name.length < 5) {
    return res
      .status(400)
      .json({ error: true, message: 'Name must be 5 characters long!' });
  }

  if (!description) {
    return res
      .status(400)
      .json({ error: true, message: 'Description must be provided' });
  } else if (typeof description !== 'string') {
    return res
      .status(400)
      .json({ error: true, message: 'Description must be a string!' });
  } else if (description.length < 10) {
    return res.status(400).json({
      error: true,
      message: 'Description must be 10 characters long!',
    });
  }

  const group = new Group({ name, description });

  try {
    return res.status(201).json({
      error: false,
      group: await group.save(),
    });
  } catch (error) {
    return res
      .status(400)
      .json({ error: true, message: 'Error when creating a group' });
  }
};

export const createGroupMeetup = async (req, res) => {
  const { title, description } = req.body;
  const { groupId } = req.params;

  if (!title) {
    return res
      .status(400)
      .json({ error: true, message: 'Title must be provided' });
  } else if (typeof title !== 'string') {
    return res
      .status(400)
      .json({ error: true, message: 'Title must be a string!' });
  } else if (title.length < 5) {
    return res
      .status(400)
      .json({ error: true, message: 'Title must be 5 characters long!' });
  }

  if (!description) {
    return res
      .status(400)
      .json({ error: true, message: 'Description must be provided' });
  } else if (typeof description !== 'string') {
    return res
      .status(400)
      .json({ error: true, message: 'Description must be a string!' });
  } else if (description.length < 10) {
    return res.status(400).json({
      error: true,
      message: 'Description must be 10 characters long!',
    });
  }

  if (!groupId) {
    return res.status(400).json({
      error: true,
      message: 'Group id must be provided',
    });
  }

  try {
    const [meetup, group] = await Group.addMeetup(groupId, {
      title,
      description,
    });
    return res.status(201).json({
      error: false,
      meetup,
      group,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: 'Meetup cannot be created!',
    });
  }
};
