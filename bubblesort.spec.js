describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([])).toEqual([]);
  });

  it('handles an array with single items', function(){
    expect(bubbleSort([2])).toEqual([2]);
  });

  it('handles an array with multiple items', function(){
    expect(bubbleSort([12,4,3,20])).toEqual([3,4,12,20]);
  });
});
