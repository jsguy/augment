# Augment

The augment function is able to add to objects, without being destructive.
For example:

```
obj1 = {
	plugins: ['a', 'b'],
	config: {
		show: {
			immediately: true
		}
	}
};
obj2 = {
	plugins: ['c'],
	config: {
		show: {
			order: 'reverse'
		}
	}
};

augment(obj1, obj2);
```

After that, obj1 contains:

```
{
	plugins: ['a', 'b', 'c'],
	config: {
	show: {
		immediately: true,
			order: 'reverse'
		}
	}
}
```