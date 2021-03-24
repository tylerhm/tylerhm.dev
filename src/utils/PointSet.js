// Hashable set of points
class PointSet {

  // Initialize the pointset
  constructor() {
    this.pointset = {}
  }

  // Add point to pointset
  add(point) {
    if (!this.pointset[point.x])
      this.pointset[point.x] = {}
    this.pointset[point.x][point.y] = true
  }

  // Return true if point is in pointset
  has(point) {
    return !!(this.pointset[point.x] && this.pointset[point.x][point.y])
  }

  // Remove point from pointset
  del(point) {
    if (!this.pointset[point.x])
      return
    delete this.pointset[point.x][point.y]
    if (Object.keys(this.pointset).length === 0)
      delete this.pointset[point.x]
  }
}

export default PointSet